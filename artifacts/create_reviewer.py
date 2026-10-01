#!/usr/bin/env python3
"""
C# OOP Comprehensive Exam Reviewer PDF Generator
Covers all topics from the provided lecture slides.
"""

from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import inch, cm, mm
from reportlab.lib.colors import HexColor, black, white, Color
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle,
    PageBreak, KeepTogether, ListFlowable, ListItem, HRFlowable
)
from reportlab.lib.enums import TA_CENTER, TA_LEFT, TA_JUSTIFY
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont

# Colors
PRIMARY = HexColor("#1a365d")      # Dark blue
SECONDARY = HexColor("#2b6cb0")    # Medium blue
ACCENT = HexColor("#ed8936")       # Orange
LIGHT_BG = HexColor("#ebf8ff")     # Light blue bg
CODE_BG = HexColor("#1a202c")      # Dark code bg
CODE_FG = HexColor("#e2e8f0")      # Light code text
SUCCESS = HexColor("#276749")      # Green
WARNING = HexColor("#c05621")      # Orange-red
PURPLE = HexColor("#553c9a")

def create_styles():
    styles = getSampleStyleSheet()
    
    styles.add(ParagraphStyle(
        name='CoverTitle',
        fontName='Helvetica-Bold',
        fontSize=28,
        textColor=PRIMARY,
        alignment=TA_CENTER,
        spaceAfter=12,
        leading=34
    ))
    
    styles.add(ParagraphStyle(
        name='CoverSubtitle',
        fontName='Helvetica',
        fontSize=14,
        textColor=SECONDARY,
        alignment=TA_CENTER,
        spaceAfter=8
    ))
    
    styles.add(ParagraphStyle(
        name='SectionHeader',
        fontName='Helvetica-Bold',
        fontSize=16,
        textColor=PRIMARY,
        spaceBefore=16,
        spaceAfter=8,
        borderPadding=4,
        leading=20
    ))
    
    styles.add(ParagraphStyle(
        name='SubHeader',
        fontName='Helvetica-Bold',
        fontSize=13,
        textColor=SECONDARY,
        spaceBefore=12,
        spaceAfter=6,
        leading=16
    ))
    
    styles.add(ParagraphStyle(
        name='BodyText2',
        fontName='Helvetica',
        fontSize=10,
        textColor=black,
        alignment=TA_JUSTIFY,
        spaceAfter=6,
        leading=14
    ))
    
    styles.add(ParagraphStyle(
        name='BulletText',
        fontName='Helvetica',
        fontSize=10,
        textColor=black,
        leftIndent=15,
        spaceAfter=3,
        leading=13
    ))
    
    styles.add(ParagraphStyle(
        name='Definition',
        fontName='Helvetica-Oblique',
        fontSize=10,
        textColor=HexColor("#2d3748"),
        leftIndent=10,
        rightIndent=10,
        spaceBefore=4,
        spaceAfter=8,
        leading=13,
        backColor=LIGHT_BG,
        borderPadding=6
    ))
    
    styles.add(ParagraphStyle(
        name='CodeStyle',
        fontName='Courier',
        fontSize=8.5,
        textColor=CODE_FG,
        backColor=CODE_BG,
        leftIndent=8,
        rightIndent=8,
        spaceBefore=4,
        spaceAfter=4,
        leading=11,
        borderPadding=6
    ))
    
    styles.add(ParagraphStyle(
        name='KeyTerm',
        fontName='Helvetica-Bold',
        fontSize=10,
        textColor=ACCENT,
        spaceBefore=6,
        spaceAfter=2
    ))
    
    styles.add(ParagraphStyle(
        name='Tip',
        fontName='Helvetica',
        fontSize=9,
        textColor=SUCCESS,
        leftIndent=10,
        spaceBefore=4,
        spaceAfter=6,
        leading=12
    ))
    
    styles.add(ParagraphStyle(
        name='Footer',
        fontName='Helvetica',
        fontSize=8,
        textColor=HexColor("#718096"),
        alignment=TA_CENTER
    ))
    
    styles.add(ParagraphStyle(
        name='TableHeader',
        fontName='Helvetica-Bold',
        fontSize=9,
        textColor=white,
        alignment=TA_CENTER
    ))
    
    styles.add(ParagraphStyle(
        name='TableCell',
        fontName='Helvetica',
        fontSize=8.5,
        textColor=black,
        leading=11
    ))
    
    return styles

def add_header_footer(canvas, doc):
    canvas.saveState()
    # Header
    canvas.setFillColor(PRIMARY)
    canvas.rect(0, A4[1] - 25, A4[0], 25, fill=True, stroke=False)
    canvas.setFillColor(white)
    canvas.setFont('Helvetica-Bold', 9)
    canvas.drawString(30, A4[1] - 16, "C# OOP Exam Reviewer")
    canvas.setFont('Helvetica', 8)
    canvas.drawRightString(A4[0] - 30, A4[1] - 16, "Marvin C. Santos | Instructor")
    
    # Footer
    canvas.setFillColor(HexColor("#e2e8f0"))
    canvas.rect(0, 0, A4[0], 25, fill=True, stroke=False)
    canvas.setFillColor(HexColor("#4a5568"))
    canvas.setFont('Helvetica', 8)
    canvas.drawString(30, 10, "Study hard. Understand concepts. Memorize terms.")
    canvas.drawRightString(A4[0] - 30, 10, f"Page {doc.page}")
    canvas.restoreState()

def code_block(text, styles):
    """Return a paragraph styled as code."""
    return Paragraph(text.replace(' ', '&nbsp;').replace('\n', '<br/>'), styles['CodeStyle'])

def build_pdf():
    doc = SimpleDocTemplate(
        "/home/workdir/artifacts/CSharp_OOP_Exam_Reviewer.pdf",
        pagesize=A4,
        rightMargin=40,
        leftMargin=40,
        topMargin=40,
        bottomMargin=40
    )
    
    styles = create_styles()
    story = []
    
    # ========== COVER ==========
    story.append(Spacer(1, 80))
    story.append(Paragraph("C# OBJECT-ORIENTED<br/>PROGRAMMING", styles['CoverTitle']))
    story.append(Spacer(1, 10))
    story.append(Paragraph("COMPREHENSIVE EXAM REVIEWER", styles['CoverTitle']))
    story.append(Spacer(1, 20))
    story.append(HRFlowable(width="80%", thickness=2, color=ACCENT, spaceBefore=5, spaceAfter=15))
    story.append(Paragraph("Everything you need to understand and memorize<br/>for your written exam tomorrow", styles['CoverSubtitle']))
    story.append(Spacer(1, 30))
    story.append(Paragraph("<b>Topics Covered:</b>", styles['CoverSubtitle']))
    topics = [
        "1. Data Types, Variables & Constants",
        "2. Operators, Expressions & Comments",
        "3. Classes, Objects & OOP Pillars",
        "4. Methods (Syntax, Overloading, Static/Instance)",
        "5. Strings",
        "6. Type Casting",
        "7. Constructors",
        "8. Control Structures (Sequential, Selection, Iteration)"
    ]
    for t in topics:
        story.append(Paragraph(t, styles['CoverSubtitle']))
    story.append(Spacer(1, 40))
    story.append(Paragraph("Instructor: Marvin C. Santos, MSIT", styles['CoverSubtitle']))
    story.append(Paragraph("Prepared for exam success — Understand • Memorize • Apply", styles['CoverSubtitle']))
    story.append(PageBreak())
    
    # ========== 1. DATA TYPES ==========
    story.append(Paragraph("1. DATA TYPES", styles['SectionHeader']))
    story.append(HRFlowable(width="100%", thickness=1, color=SECONDARY, spaceBefore=0, spaceAfter=8))
    
    story.append(Paragraph(
        "<b>Definition:</b> A data type specifies the type of data that a variable can hold. "
        "It determines the size and layout of the variable's memory, the range of values it can store, "
        "and the set of operations that can be applied to it.",
        styles['Definition']
    ))
    
    story.append(Paragraph("Common C# Data Types (Memorize Sizes & Ranges)", styles['SubHeader']))
    
    data = [
        [Paragraph("<b>Bytes</b>", styles['TableHeader']), 
         Paragraph("<b>Data Type</b>", styles['TableHeader']), 
         Paragraph("<b>Range / Description</b>", styles['TableHeader'])],
        [Paragraph("1", styles['TableCell']), Paragraph("byte", styles['TableCell']), Paragraph("0 to 255", styles['TableCell'])],
        [Paragraph("1", styles['TableCell']), Paragraph("sbyte", styles['TableCell']), Paragraph("-128 to 127", styles['TableCell'])],
        [Paragraph("2", styles['TableCell']), Paragraph("short", styles['TableCell']), Paragraph("-32,768 to 32,767", styles['TableCell'])],
        [Paragraph("2", styles['TableCell']), Paragraph("ushort", styles['TableCell']), Paragraph("0 to 65,535", styles['TableCell'])],
        [Paragraph("4", styles['TableCell']), Paragraph("int", styles['TableCell']), Paragraph("-2,147,483,648 to 2,147,483,647", styles['TableCell'])],
        [Paragraph("4", styles['TableCell']), Paragraph("uint", styles['TableCell']), Paragraph("0 to 4,294,967,295", styles['TableCell'])],
        [Paragraph("8", styles['TableCell']), Paragraph("long", styles['TableCell']), Paragraph("Very large signed integers", styles['TableCell'])],
        [Paragraph("8", styles['TableCell']), Paragraph("ulong", styles['TableCell']), Paragraph("Very large unsigned integers", styles['TableCell'])],
        [Paragraph("4", styles['TableCell']), Paragraph("float", styles['TableCell']), Paragraph("~±3.4 × 10³⁸ (single precision)", styles['TableCell'])],
        [Paragraph("8", styles['TableCell']), Paragraph("double", styles['TableCell']), Paragraph("~±1.8 × 10³⁰⁸ (double precision)", styles['TableCell'])],
        [Paragraph("16", styles['TableCell']), Paragraph("decimal", styles['TableCell']), Paragraph("High precision for financial (28-29 digits)", styles['TableCell'])],
        [Paragraph("2", styles['TableCell']), Paragraph("char", styles['TableCell']), Paragraph("A single Unicode character", styles['TableCell'])],
        [Paragraph("—", styles['TableCell']), Paragraph("string", styles['TableCell']), Paragraph("Sequence of Unicode characters", styles['TableCell'])],
        [Paragraph("1", styles['TableCell']), Paragraph("bool", styles['TableCell']), Paragraph("true or false", styles['TableCell'])],
        [Paragraph("—", styles['TableCell']), Paragraph("object", styles['TableCell']), Paragraph("Base type of all types", styles['TableCell'])],
    ]
    
    t = Table(data, colWidths=[45, 70, 340])
    t.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, 0), PRIMARY),
        ('TEXTCOLOR', (0, 0), (-1, 0), white),
        ('ALIGN', (0, 0), (1, -1), 'CENTER'),
        ('FONTNAME', (0, 0), (-1, 0), 'Helvetica-Bold'),
        ('FONTSIZE', (0, 0), (-1, -1), 8),
        ('BOTTOMPADDING', (0, 0), (-1, 0), 6),
        ('TOPPADDING', (0, 0), (-1, -1), 4),
        ('BOTTOMPADDING', (0, 1), (-1, -1), 4),
        ('BACKGROUND', (0, 1), (-1, -1), HexColor("#f7fafc")),
        ('ROWBACKGROUNDS', (0, 1), (-1, -1), [HexColor("#f7fafc"), HexColor("#edf2f7")]),
        ('GRID', (0, 0), (-1, -1), 0.5, HexColor("#cbd5e0")),
        ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
    ]))
    story.append(t)
    story.append(Spacer(1, 8))
    story.append(Paragraph("💡 <b>Tip:</b> int is the most commonly used integer type. double for most floating-point math. decimal for money.", styles['Tip']))
    
    # ========== 2. VARIABLES ==========
    story.append(Paragraph("2. VARIABLES", styles['SectionHeader']))
    story.append(HRFlowable(width="100%", thickness=1, color=SECONDARY, spaceBefore=0, spaceAfter=8))
    
    story.append(Paragraph(
        "<b>Definition:</b> A variable is a named storage location in memory that holds a value which can be changed during program execution. "
        "It has a name (identifier), a type, and a value.",
        styles['Definition']
    ))
    
    story.append(Paragraph("Key Concepts to Memorize", styles['SubHeader']))
    story.append(Paragraph("• <b>Declaration</b> — Creating a variable: <font face='Courier'>int age;</font>", styles['BulletText']))
    story.append(Paragraph("• <b>Initialization</b> — Giving it a value: <font face='Courier'>int age = 30;</font>", styles['BulletText']))
    story.append(Paragraph("• <b>Assignment</b> — Changing its value later: <font face='Courier'>age = 31;</font>", styles['BulletText']))
    story.append(Paragraph("• <b>Scope</b> — Where the variable is visible (local, class-level, etc.)", styles['BulletText']))
    story.append(Paragraph("• <b>Mutability</b> — Variables can change; constants cannot.", styles['BulletText']))
    
    story.append(Paragraph("Syntax Examples", styles['SubHeader']))
    story.append(code_block(
        "int age = 30;                    // declaration + initialization\n"
        "string name = \"Marvin\";         // string variable\n"
        "bool isStudent = true;           // boolean\n"
        "double price = 99.99;            // floating point\n"
        "var score = 95;                  // type inference (compiler decides type)",
        styles
    ))
    
    story.append(Paragraph("💡 <b>Remember:</b> Use meaningful names (camelCase for local variables). Avoid single-letter names except in loops.", styles['Tip']))
    
    # ========== 3. CONSTANTS ==========
    story.append(Paragraph("3. CONSTANTS", styles['SectionHeader']))
    story.append(HRFlowable(width="100%", thickness=1, color=SECONDARY, spaceBefore=0, spaceAfter=8))
    
    story.append(Paragraph(
        "<b>Definition:</b> A constant is a value that cannot be changed after it is assigned. "
        "It is declared using the <b>const</b> keyword and must be initialized at declaration.",
        styles['Definition']
    ))
    
    story.append(Paragraph("Why use constants?", styles['SubHeader']))
    story.append(Paragraph("• Prevents accidental modification of important values", styles['BulletText']))
    story.append(Paragraph("• Makes code more readable (MAX_STUDENTS is clearer than 50)", styles['BulletText']))
    story.append(Paragraph("• Improves maintainability — change in one place only", styles['BulletText']))
    
    story.append(code_block(
        "const int MaxValue = 100;\n"
        "const double Pi = 3.14159;\n"
        "const string SchoolName = \"PLV\";\n"
        "// MaxValue = 200;  // ERROR! Cannot modify a constant",
        styles
    ))
    
    story.append(Paragraph("💡 <b>Rule:</b> Constants must be assigned a value at declaration and cannot be modified later.", styles['Tip']))
    
    # ========== 4. OPERATORS ==========
    story.append(Paragraph("4. OPERATORS", styles['SectionHeader']))
    story.append(HRFlowable(width="100%", thickness=1, color=SECONDARY, spaceBefore=0, spaceAfter=8))
    
    story.append(Paragraph(
        "<b>Definition:</b> Operators are symbols that tell the compiler to perform specific mathematical, relational, or logical operations.",
        styles['Definition']
    ))
    
    story.append(Paragraph("A. Assignment Operators", styles['SubHeader']))
    story.append(Paragraph("Used to assign values to variables.", styles['BodyText2']))
    assign_data = [
        [Paragraph("<b>Operator</b>", styles['TableHeader']), Paragraph("<b>Example</b>", styles['TableHeader']), Paragraph("<b>Meaning</b>", styles['TableHeader'])],
        [Paragraph("=", styles['TableCell']), Paragraph("x = 5", styles['TableCell']), Paragraph("Assign 5 to x", styles['TableCell'])],
        [Paragraph("+=", styles['TableCell']), Paragraph("x += 3", styles['TableCell']), Paragraph("x = x + 3", styles['TableCell'])],
        [Paragraph("-=", styles['TableCell']), Paragraph("x -= 2", styles['TableCell']), Paragraph("x = x - 2", styles['TableCell'])],
        [Paragraph("*=", styles['TableCell']), Paragraph("x *= 4", styles['TableCell']), Paragraph("x = x * 4", styles['TableCell'])],
        [Paragraph("/=", styles['TableCell']), Paragraph("x /= 2", styles['TableCell']), Paragraph("x = x / 2", styles['TableCell'])],
        [Paragraph("%=", styles['TableCell']), Paragraph("x %= 3", styles['TableCell']), Paragraph("x = x % 3 (remainder)", styles['TableCell'])],
    ]
    t = Table(assign_data, colWidths=[70, 100, 285])
    t.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, 0), SECONDARY),
        ('TEXTCOLOR', (0, 0), (-1, 0), white),
        ('ALIGN', (0, 0), (0, -1), 'CENTER'),
        ('FONTSIZE', (0, 0), (-1, -1), 8.5),
        ('TOPPADDING', (0, 0), (-1, -1), 3),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 3),
        ('ROWBACKGROUNDS', (0, 1), (-1, -1), [white, HexColor("#edf2f7")]),
        ('GRID', (0, 0), (-1, -1), 0.5, HexColor("#a0aec0")),
    ]))
    story.append(t)
    
    story.append(Paragraph("B. Arithmetic Operators", styles['SubHeader']))
    arith_data = [
        [Paragraph("<b>Operator</b>", styles['TableHeader']), Paragraph("<b>Name</b>", styles['TableHeader']), Paragraph("<b>Example</b>", styles['TableHeader']), Paragraph("<b>Result</b>", styles['TableHeader'])],
        [Paragraph("+", styles['TableCell']), Paragraph("Addition", styles['TableCell']), Paragraph("10 + 5", styles['TableCell']), Paragraph("15", styles['TableCell'])],
        [Paragraph("-", styles['TableCell']), Paragraph("Subtraction", styles['TableCell']), Paragraph("10 - 5", styles['TableCell']), Paragraph("5", styles['TableCell'])],
        [Paragraph("*", styles['TableCell']), Paragraph("Multiplication", styles['TableCell']), Paragraph("10 * 5", styles['TableCell']), Paragraph("50", styles['TableCell'])],
        [Paragraph("/", styles['TableCell']), Paragraph("Division", styles['TableCell']), Paragraph("10 / 5", styles['TableCell']), Paragraph("2", styles['TableCell'])],
        [Paragraph("%", styles['TableCell']), Paragraph("Modulus", styles['TableCell']), Paragraph("10 % 3", styles['TableCell']), Paragraph("1 (remainder)", styles['TableCell'])],
        [Paragraph("++", styles['TableCell']), Paragraph("Increment", styles['TableCell']), Paragraph("x++ or ++x", styles['TableCell']), Paragraph("Adds 1", styles['TableCell'])],
        [Paragraph("--", styles['TableCell']), Paragraph("Decrement", styles['TableCell']), Paragraph("x-- or --x", styles['TableCell']), Paragraph("Subtracts 1", styles['TableCell'])],
    ]
    t = Table(arith_data, colWidths=[60, 90, 120, 185])
    t.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, 0), SECONDARY),
        ('TEXTCOLOR', (0, 0), (-1, 0), white),
        ('ALIGN', (0, 0), (0, -1), 'CENTER'),
        ('FONTSIZE', (0, 0), (-1, -1), 8.5),
        ('TOPPADDING', (0, 0), (-1, -1), 3),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 3),
        ('ROWBACKGROUNDS', (0, 1), (-1, -1), [white, HexColor("#edf2f7")]),
        ('GRID', (0, 0), (-1, -1), 0.5, HexColor("#a0aec0")),
    ]))
    story.append(t)
    
    story.append(Paragraph("C. Relational (Comparison) Operators", styles['SubHeader']))
    story.append(Paragraph("Return <b>true</b> or <b>false</b>. Used in conditions.", styles['BodyText2']))
    rel_data = [
        [Paragraph("<b>Operator</b>", styles['TableHeader']), Paragraph("<b>Meaning</b>", styles['TableHeader']), Paragraph("<b>Example</b>", styles['TableHeader'])],
        [Paragraph("==", styles['TableCell']), Paragraph("Equal to", styles['TableCell']), Paragraph("5 == 5 → true", styles['TableCell'])],
        [Paragraph("!=", styles['TableCell']), Paragraph("Not equal to", styles['TableCell']), Paragraph("5 != 3 → true", styles['TableCell'])],
        [Paragraph(">", styles['TableCell']), Paragraph("Greater than", styles['TableCell']), Paragraph("5 > 3 → true", styles['TableCell'])],
        [Paragraph("<", styles['TableCell']), Paragraph("Less than", styles['TableCell']), Paragraph("5 < 3 → false", styles['TableCell'])],
        [Paragraph(">=", styles['TableCell']), Paragraph("Greater than or equal", styles['TableCell']), Paragraph("5 >= 5 → true", styles['TableCell'])],
        [Paragraph("<=", styles['TableCell']), Paragraph("Less than or equal", styles['TableCell']), Paragraph("5 <= 3 → false", styles['TableCell'])],
    ]
    t = Table(rel_data, colWidths=[70, 150, 235])
    t.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, 0), SECONDARY),
        ('TEXTCOLOR', (0, 0), (-1, 0), white),
        ('ALIGN', (0, 0), (0, -1), 'CENTER'),
        ('FONTSIZE', (0, 0), (-1, -1), 8.5),
        ('TOPPADDING', (0, 0), (-1, -1), 3),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 3),
        ('ROWBACKGROUNDS', (0, 1), (-1, -1), [white, HexColor("#edf2f7")]),
        ('GRID', (0, 0), (-1, -1), 0.5, HexColor("#a0aec0")),
    ]))
    story.append(t)
    
    story.append(Paragraph("D. Logical Operators", styles['SubHeader']))
    story.append(Paragraph("Used to combine multiple conditions.", styles['BodyText2']))
    log_data = [
        [Paragraph("<b>Operator</b>", styles['TableHeader']), Paragraph("<b>Name</b>", styles['TableHeader']), Paragraph("<b>Description</b>", styles['TableHeader'])],
        [Paragraph("&&", styles['TableCell']), Paragraph("Logical AND", styles['TableCell']), Paragraph("True only if BOTH conditions are true", styles['TableCell'])],
        [Paragraph("||", styles['TableCell']), Paragraph("Logical OR", styles['TableCell']), Paragraph("True if AT LEAST ONE condition is true", styles['TableCell'])],
        [Paragraph("!", styles['TableCell']), Paragraph("Logical NOT", styles['TableCell']), Paragraph("Reverses the result (true becomes false)", styles['TableCell'])],
    ]
    t = Table(log_data, colWidths=[70, 100, 285])
    t.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, 0), SECONDARY),
        ('TEXTCOLOR', (0, 0), (-1, 0), white),
        ('ALIGN', (0, 0), (0, -1), 'CENTER'),
        ('FONTSIZE', (0, 0), (-1, -1), 8.5),
        ('TOPPADDING', (0, 0), (-1, -1), 3),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 3),
        ('ROWBACKGROUNDS', (0, 1), (-1, -1), [white, HexColor("#edf2f7")]),
        ('GRID', (0, 0), (-1, -1), 0.5, HexColor("#a0aec0")),
    ]))
    story.append(t)
    
    story.append(Paragraph("Example combining operators:", styles['BodyText2']))
    story.append(code_block(
        "bool isValidTourist = (age >= 18) && (hasVisa || hasPassport);\n"
        "// True only if age is 18+ AND (has visa OR has passport)",
        styles
    ))
    
    # ========== 5. EXPRESSIONS & COMMENTS ==========
    story.append(Paragraph("5. EXPRESSIONS & COMMENTS", styles['SectionHeader']))
    story.append(HRFlowable(width="100%", thickness=1, color=SECONDARY, spaceBefore=0, spaceAfter=8))
    
    story.append(Paragraph(
        "<b>Expression:</b> A combination of variables, constants, operators, and method calls that evaluates to a single value.",
        styles['Definition']
    ))
    story.append(code_block(
        "int result = (a + b) * c;     // arithmetic expression\n"
        "bool check = x > 10;          // relational expression\n"
        "string full = first + \" \" + last;  // string expression",
        styles
    ))
    
    story.append(Paragraph("Comments (Important for code readability)", styles['SubHeader']))
    story.append(Paragraph("• <b>Single-line:</b> <font face='Courier'>// This is a comment</font>", styles['BulletText']))
    story.append(Paragraph("• <b>Multi-line:</b> <font face='Courier'>/* This is a multi-line comment */</font>", styles['BulletText']))
    story.append(Paragraph("• Comments are ignored by the compiler. Use them to explain why, not what.", styles['BulletText']))
    
    story.append(PageBreak())
    
    # ========== 6. CLASSES & OBJECTS ==========
    story.append(Paragraph("6. CLASSES AND OBJECTS", styles['SectionHeader']))
    story.append(HRFlowable(width="100%", thickness=1, color=SECONDARY, spaceBefore=0, spaceAfter=8))
    
    story.append(Paragraph(
        "<b>Class:</b> A blueprint or template that defines the attributes (fields/properties) and behaviors (methods) of objects. "
        "It is a logical construct.",
        styles['Definition']
    ))
    story.append(Paragraph(
        "<b>Object:</b> An instance of a class. It is a concrete entity created from the class blueprint that exists in memory.",
        styles['Definition']
    ))
    
    story.append(Paragraph("Analogy from the lectures (Car example)", styles['SubHeader']))
    story.append(Paragraph(
        "Class = CAR (has Color, Speed, Price, Model + methods: start(), accelerate(), stop(), park())<br/>"
        "Objects = Honda (Gray, 250 mph, Php 1.2M, Civic 2022) and Toyota (Red, 200 mph, Php 1.1M, Vios 2022)",
        styles['BodyText2']
    ))
    
    story.append(Paragraph("Why OOP? (From slides)", styles['SubHeader']))
    story.append(Paragraph("• Before OOP: Procedural programming → sequences of instructions → functions operate on data separately.", styles['BulletText']))
    story.append(Paragraph("• Problem: Spaghetti code — programs jump all over the place, hard to follow (lots of GOTO).", styles['BulletText']))
    story.append(Paragraph("• OOP Rescue: Combine related variables and functions into a single unit (the class).", styles['BulletText']))
    story.append(Paragraph("• Advantage: Reusable software components.", styles['BulletText']))
    
    story.append(Paragraph("OOP Paradigm", styles['SubHeader']))
    story.append(Paragraph(
        "Model instructions together with the data they manipulate and store these as components. "
        "This gives reusable software components.",
        styles['BodyText2']
    ))
    
    # ========== 7. 4 PILLARS OF OOP ==========
    story.append(Paragraph("7. THE 4 FUNDAMENTAL PILLARS OF OOP", styles['SectionHeader']))
    story.append(HRFlowable(width="100%", thickness=1, color=SECONDARY, spaceBefore=0, spaceAfter=8))
    
    story.append(Paragraph("Memorize these four words and their meanings perfectly:", styles['BodyText2']))
    
    story.append(Paragraph("1. ENCAPSULATION", styles['KeyTerm']))
    story.append(Paragraph(
        "Bundling data (fields) and methods that operate on that data into a single unit (class), "
        "and restricting direct access to some of the object's components (using private).",
        styles['Definition']
    ))
    story.append(Paragraph("• <b>Public</b> — Can be directly called once the object is created.", styles['BulletText']))
    story.append(Paragraph("• <b>Private</b> — Called within a method; not visible when the object is created.", styles['BulletText']))
    story.append(Paragraph("• Quote from slides: “To containerize and encapsulate as much as you can.”", styles['BulletText']))
    
    story.append(Paragraph("2. INHERITANCE", styles['KeyTerm']))
    story.append(Paragraph(
        "A mechanism where one class (child/derived) acquires the properties and behaviors of another class (parent/base). "
        "Promotes code reuse.",
        styles['Definition']
    ))
    story.append(Paragraph(
        "Example from slides: PERSON (Name, Age, Gender, Walk(), Run(), Play(), Sleep()) is the parent.<br/>"
        "TEACHER and STUDENT inherit from PERSON and add their own members (FacultyNo, Salary / StudentNo, Enroll()).",
        styles['BodyText2']
    ))
    
    story.append(Paragraph("3. POLYMORPHISM", styles['KeyTerm']))
    story.append(Paragraph(
        "<b>Poly</b> = many, <b>Morph</b> = forms.<br/>"
        "<b>Polymorphism</b> = the ability of an object to take on many forms. "
        "Same method name can behave differently depending on the object or parameters.",
        styles['Definition']
    ))
    
    story.append(Paragraph("4. ABSTRACTION", styles['KeyTerm']))
    story.append(Paragraph(
        "Hiding complex implementation details and showing only the essential features of an object. "
        "Focus on what an object does rather than how it does it.",
        styles['Definition']
    ))
    
    story.append(Paragraph("💡 <b>Memory Tip:</b> EPIA — Encapsulation, Polymorphism, Inheritance, Abstraction (or remember the order from the slides).", styles['Tip']))
    
    story.append(PageBreak())
    
    # ========== 8. METHODS ==========
    story.append(Paragraph("8. METHODS", styles['SectionHeader']))
    story.append(HRFlowable(width="100%", thickness=1, color=SECONDARY, spaceBefore=0, spaceAfter=8))
    
    story.append(Paragraph(
        "<b>Definition:</b> A method is a block of code that only runs when it is called. "
        "It contains a series of statements, performs certain actions (also called functions), "
        "defines the behavior of objects created from a class, and is an action that an object is able to perform.",
        styles['Definition']
    ))
    
    story.append(Paragraph("Why use Methods?", styles['SubHeader']))
    story.append(Paragraph("• <b>Code reusability</b> — define once, use many times.", styles['BulletText']))
    story.append(Paragraph("• You can pass data (parameters).", styles['BulletText']))
    story.append(Paragraph("• Perform certain actions.", styles['BulletText']))
    story.append(Paragraph("• Manage complexity — divide big tasks into smaller, easily understood tasks.", styles['BulletText']))
    story.append(Paragraph("• Hide implementation details.", styles['BulletText']))
    
    story.append(Paragraph("Basic Syntax", styles['SubHeader']))
    story.append(code_block(
        "[access modifier] [return type] MethodName ([parameters])\n"
        "{\n"
        "    // Method body (statements)\n"
        "}\n\n"
        "public int Add(int a, int b)\n"
        "{\n"
        "    return a + b;\n"
        "}",
        styles
    ))
    
    story.append(Paragraph("Method Components", styles['SubHeader']))
    story.append(Paragraph("• <b>Name</b> — myMethod()", styles['BulletText']))
    story.append(Paragraph("• <b>Access modifiers</b> — public, private, protected (control who can access)", styles['BulletText']))
    story.append(Paragraph("• <b>Return type</b> — int, string, bool, void (void means no return value)", styles['BulletText']))
    story.append(Paragraph("• <b>Parameters</b> — data passed into the method", styles['BulletText']))
    
    story.append(Paragraph("Access Modifiers (again — critical)", styles['SubHeader']))
    story.append(Paragraph("• <b>public</b> — Can be directly called once the object is created.", styles['BulletText']))
    story.append(Paragraph("• <b>private</b> — Only accessible within the same class; not visible from outside.", styles['BulletText']))
    
    story.append(Paragraph("Calling a Method", styles['SubHeader']))
    story.append(Paragraph("Defining a method does <b>NOT</b> execute it. It runs only when called. Use parentheses ().", styles['BodyText2']))
    story.append(code_block(
        "static void Greet() { Console.WriteLine(\"Hello!\"); }\n\n"
        "static void Main(string[] args)\n"
        "{\n"
        "    Greet();   // method call\n"
        "}",
        styles
    ))
    
    story.append(Paragraph("Void Methods", styles['SubHeader']))
    story.append(Paragraph("Perform an action but do not return a value. Common for displaying text or changing state.", styles['BodyText2']))
    
    story.append(Paragraph("Method Overloading", styles['SubHeader']))
    story.append(Paragraph(
        "C# allows multiple methods with the <b>same name</b> but <b>different parameter lists</b> "
        "(different number or types of parameters). This is a form of polymorphism.",
        styles['BodyText2']
    ))
    story.append(code_block(
        "public int Add(int a, int b) { return a + b; }\n"
        "public double Add(float a, float b) { return a + b; }",
        styles
    ))
    
    story.append(Paragraph("Static vs Instance Methods", styles['SubHeader']))
    story.append(Paragraph(
        "• <b>Static method</b> — Belongs to the class. Called without creating an object: <font face='Courier'>ClassName.MethodName()</font>",
        styles['BulletText']
    ))
    story.append(Paragraph(
        "• <b>Instance method</b> — Belongs to an object. Requires creating an instance first: <font face='Courier'>obj.MethodName()</font>",
        styles['BulletText']
    ))
    story.append(code_block(
        "// Static\n"
        "public static void SayHello() { Console.WriteLine(\"Hello!\"); }\n"
        "Student.SayHello();   // no object needed\n\n"
        "// Instance\n"
        "public void Study() { Console.WriteLine(\"I am studying.\"); }\n"
        "Student s = new Student();\n"
        "s.Study();            // needs object",
        styles
    ))
    
    story.append(Paragraph("Optional Parameters", styles['SubHeader']))
    story.append(Paragraph("You can give parameters default values so callers can omit them.", styles['BodyText2']))
    story.append(code_block(
        "public void StudentDetails(string name, string school = \"PLV\")\n"
        "{\n"
        "    Console.WriteLine($\"{school} - {name}\");\n"
        "}\n"
        "// Call: StudentDetails(\"Marvin Santos\");  → PLV - Marvin Santos",
        styles
    ))
    
    # ========== 9. STRINGS ==========
    story.append(Paragraph("9. STRINGS", styles['SectionHeader']))
    story.append(HRFlowable(width="100%", thickness=1, color=SECONDARY, spaceBefore=0, spaceAfter=8))
    
    story.append(Paragraph(
        "<b>Definition:</b> A string is a variable that contains a collection of characters surrounded by double quotes. "
        "It is a collection of characters (char is a single character).",
        styles['Definition']
    ))
    
    story.append(code_block(
        "char thisLetter = 'S';           // single character — single quotes\n"
        "string thisWord = \"Swim\";       // collection of chars — double quotes",
        styles
    ))
    
    story.append(Paragraph("Key String Concepts", styles['SubHeader']))
    story.append(Paragraph("• Strings are <b>reference types</b> (unlike int, bool which are value types).", styles['BulletText']))
    story.append(Paragraph("• Strings are immutable — operations create new strings.", styles['BulletText']))
    story.append(Paragraph("• Concatenation: <font face='Courier'>string full = firstName + \" \" + lastName;</font>", styles['BulletText']))
    story.append(Paragraph("• Interpolation (preferred): <font face='Courier'>$\"Hello, {name}!\"</font>", styles['BulletText']))
    
    story.append(Paragraph("Common String Methods (Memorize)", styles['SubHeader']))
    story.append(Paragraph("• <b>Length</b> — number of characters", styles['BulletText']))
    story.append(Paragraph("• <b>ToUpper() / ToLower()</b> — change case", styles['BulletText']))
    story.append(Paragraph("• <b>Substring(start, length)</b> — extract part of string", styles['BulletText']))
    story.append(Paragraph("• <b>Replace(old, new)</b> — replace text", styles['BulletText']))
    story.append(Paragraph("• <b>Contains(text)</b> — check if substring exists", styles['BulletText']))
    story.append(Paragraph("• <b>Trim()</b> — remove leading/trailing whitespace", styles['BulletText']))
    
    story.append(PageBreak())
    
    # ========== 10. TYPE CASTING ==========
    story.append(Paragraph("10. TYPE CASTING", styles['SectionHeader']))
    story.append(HRFlowable(width="100%", thickness=1, color=SECONDARY, spaceBefore=0, spaceAfter=8))
    
    story.append(Paragraph(
        "<b>Definition:</b> Type casting is when you assign a value of one data type to another type.",
        styles['Definition']
    ))
    
    story.append(Paragraph("Why do we need Type Casting?", styles['SubHeader']))
    story.append(Paragraph("• To ensure a function handles the variables correctly.", styles['BulletText']))
    story.append(Paragraph("• C# is a compiled language — types must match.", styles['BulletText']))
    story.append(Paragraph("• To treat our data properly and guarantee functionality.", styles['BulletText']))
    
    story.append(Paragraph("Two Types of Casting in C#", styles['SubHeader']))
    
    story.append(Paragraph("<b>1. Implicit Casting</b> (Automatic / Widening)", styles['KeyTerm']))
    story.append(Paragraph(
        "Converting a <b>smaller</b> type to a <b>larger</b> type. Safe — no data loss.<br/>"
        "Direction: byte → int → long → float → double",
        styles['BodyText2']
    ))
    story.append(code_block(
        "byte a = 255;\n"
        "int mySalary = a;          // implicit — works fine\n"
        "Console.WriteLine(mySalary);  // 255",
        styles
    ))
    
    story.append(Paragraph("<b>2. Explicit Casting</b> (Manual / Narrowing)", styles['KeyTerm']))
    story.append(Paragraph(
        "Converting a <b>larger</b> type to a <b>smaller</b> type. May lose data. You must force it with (type).<br/>"
        "Direction: double → long → int → byte",
        styles['BodyText2']
    ))
    story.append(code_block(
        "int mySalary = 2500;\n"
        "// byte a = mySalary;           // ERROR — cannot implicitly convert\n"
        "byte a = (byte)mySalary;        // explicit cast\n"
        "Console.WriteLine(a);           // 255  (data loss! 2500 % 256 = 196 actually, but concept is overflow)",
        styles
    ))
    
    story.append(Paragraph("Other Conversion Methods (Convert class)", styles['SubHeader']))
    story.append(code_block(
        "int y = 20;\n"
        "double z = 74.5;\n"
        "bool yesNo = true;\n\n"
        "Convert.ToString(y);     // int → string\n"
        "Convert.ToDouble(y);     // int → double\n"
        "Convert.ToInt32(z);      // double → int (truncates)\n"
        "Convert.ToString(yesNo); // bool → string",
        styles
    ))
    
    story.append(Paragraph("💡 <b>Exam Tip:</b> Know the difference between implicit (safe, automatic) and explicit (manual, possible data loss). Also know Convert.ToXxx methods.", styles['Tip']))
    
    # ========== 11. CONSTRUCTORS ==========
    story.append(Paragraph("11. CONSTRUCTORS", styles['SectionHeader']))
    story.append(HRFlowable(width="100%", thickness=1, color=SECONDARY, spaceBefore=0, spaceAfter=8))
    
    story.append(Paragraph(
        "<b>Definition:</b> Constructors are <b>special methods</b> in C# that are invoked automatically "
        "when an object of a class is created.",
        styles['Definition']
    ))
    
    story.append(Paragraph("Naming Rules (Memorize)", styles['SubHeader']))
    story.append(Paragraph("• Constructors have the <b>same name as the Class</b>.", styles['BulletText']))
    story.append(Paragraph("• They do <b>not</b> have a return type — not even void.", styles['BulletText']))
    
    story.append(Paragraph("Types of Constructors (from slides)", styles['SubHeader']))
    
    story.append(Paragraph("<b>Default Constructor</b>", styles['KeyTerm']))
    story.append(Paragraph(
        "When you create a default constructor, you can SET an initial value of the class itself. "
        "It has no parameters.",
        styles['BodyText2']
    ))
    
    story.append(Paragraph("<b>Parameterized / Overloaded Constructors (Polymorphism on Constructors)</b>", styles['KeyTerm']))
    story.append(Paragraph(
        "“Implementing Constructors in different ways.” Multiple constructors with different parameter lists.",
        styles['BodyText2']
    ))
    
    story.append(Paragraph("<b>Copy Constructor</b>", styles['KeyTerm']))
    story.append(Paragraph("“Constructors that copy itself” — creates a new object as a copy of an existing object.", styles['BodyText2']))
    
    story.append(Paragraph("<b>Private Constructor</b>", styles['KeyTerm']))
    story.append(Paragraph(
        "“Preventing to implement this specific constructor, while implementing Encapsulation.” "
        "Used to restrict instantiation (e.g., singleton pattern).",
        styles['BodyText2']
    ))
    
    story.append(Paragraph("<b>Static Constructor</b>", styles['KeyTerm']))
    story.append(Paragraph(
        "“You can only invoke this static Constructor… ONCE.” "
        "Used to initialize static members. Called automatically before any static members are accessed or any instances are created.",
        styles['BodyText2']
    ))
    
    story.append(Paragraph("💡 <b>Key Rule:</b> Same name as class + no return type = Constructor.", styles['Tip']))
    
    story.append(PageBreak())
    
    # ========== 12. CONTROL STRUCTURES ==========
    story.append(Paragraph("12. CONTROL STRUCTURES", styles['SectionHeader']))
    story.append(HRFlowable(width="100%", thickness=1, color=SECONDARY, spaceBefore=0, spaceAfter=8))
    
    story.append(Paragraph(
        "<b>Definition:</b> A way to specify the flow of control in any algorithm or program so it can be clearer and better understood. "
        "It analyzes and chooses in which direction a program flows based on certain parameters or conditions.",
        styles['Definition']
    ))
    
    story.append(Paragraph("Three Main Categories", styles['SubHeader']))
    story.append(Paragraph("1. <b>Sequential Logic</b> — Do", styles['BulletText']))
    story.append(Paragraph("2. <b>Selection Logic</b> — Decide (One-way, Two-way, Multiple)", styles['BulletText']))
    story.append(Paragraph("3. <b>Iteration Logic (Repetition)</b> — Repeat", styles['BulletText']))
    
    # Sequential
    story.append(Paragraph("A. Sequential Logic", styles['SubHeader']))
    story.append(Paragraph(
        "Follows a serial or sequence flow. Flow depends on the series of instructions. "
        "Modules are executed in the obvious sequence.",
        styles['BodyText2']
    ))
    story.append(Paragraph("Basic Program Flow: Start → Input → Output → End", styles['BodyText2']))
    story.append(code_block(
        "x = 10          # Step 1: assign 10 to x\n"
        "y = 20          # Step 2: assign 20 to y\n"
        "z = x + y       # Step 3: add x and y, store in z\n"
        "print(z)        # Step 4: print the result (30)",
        styles
    ))
    
    # Selection
    story.append(Paragraph("B. Selection Logic", styles['SubHeader']))
    story.append(Paragraph(
        "Allows one set of statements to be executed if a condition is true and another set of actions if the condition is false.",
        styles['BodyText2']
    ))
    
    story.append(Paragraph("<b>One-Way Selection (if)</b>", styles['KeyTerm']))
    story.append(Paragraph("Executes a block only if the condition is true. Otherwise skips it.", styles['BodyText2']))
    story.append(code_block(
        "temperature = 30\n"
        "if temperature > 25:\n"
        "    print(\"It's a hot day!\")",
        styles
    ))
    
    story.append(Paragraph("<b>Two-Way Selection (if-else)</b>", styles['KeyTerm']))
    story.append(Paragraph("Executes one block if true, a different block if false.", styles['BodyText2']))
    story.append(code_block(
        "temperature = 20\n"
        "if temperature > 25:\n"
        "    print(\"It's a hot day!\")\n"
        "else:\n"
        "    print(\"It's not a hot day.\")",
        styles
    ))
    
    story.append(Paragraph("<b>Multiple Selection (if-elif-else / switch)</b>", styles['KeyTerm']))
    story.append(Paragraph("Checks multiple conditions in sequence.", styles['BodyText2']))
    story.append(code_block(
        "temperature = 15\n"
        "if temperature > 30:\n"
        "    print(\"It's a very hot day!\")\n"
        "elif temperature > 20:\n"
        "    print(\"It's a warm day.\")\n"
        "else:\n"
        "    print(\"It's a cool day.\")",
        styles
    ))
    
    # Iteration
    story.append(Paragraph("C. Iteration Logic – Repetition", styles['SubHeader']))
    story.append(Paragraph(
        "Employs a loop which involves a “REPEAT Statement”. Repeats a block of code while a condition is true or for a set number of times.",
        styles['BodyText2']
    ))
    
    story.append(Paragraph("<b>FOR Loop</b>", styles['KeyTerm']))
    story.append(Paragraph(
        "Repeats a block of code a specific number of times or iterates over a collection of items.",
        styles['BodyText2']
    ))
    story.append(code_block(
        "for i in range(5):\n"
        "    print(i)\n"
        "# Output: 0 1 2 3 4",
        styles
    ))
    
    story.append(Paragraph("<b>WHILE Loop</b>", styles['KeyTerm']))
    story.append(Paragraph(
        "Repeats a block of code as long as a given condition is true. "
        "Typically used when the number of iterations is not known in advance.",
        styles['BodyText2']
    ))
    story.append(code_block(
        "i = 0\n"
        "while i < 5:\n"
        "    print(i)\n"
        "    i += 1\n"
        "# Output: 0 1 2 3 4",
        styles
    ))
    
    story.append(Paragraph("💡 <b>Summary Memory Aid:</b> Sequential = Do • Selection = Decide • Iteration = Repeat", styles['Tip']))
    
    # ========== QUICK REFERENCE ==========
    story.append(PageBreak())
    story.append(Paragraph("QUICK REFERENCE CHEAT SHEET", styles['SectionHeader']))
    story.append(HRFlowable(width="100%", thickness=1, color=ACCENT, spaceBefore=0, spaceAfter=8))
    
    story.append(Paragraph("Must-Memorize Definitions", styles['SubHeader']))
    defs = [
        ("Variable", "Named storage that can change."),
        ("Constant", "Named value that cannot change (const)."),
        ("Class", "Blueprint / template for objects."),
        ("Object", "Instance of a class (exists in memory)."),
        ("Method", "Block of code that runs when called; defines behavior."),
        ("Encapsulation", "Bundling data + methods and hiding internal details (public/private)."),
        ("Inheritance", "Child class acquires members of parent class."),
        ("Polymorphism", "Ability of an object to take many forms (same name, different behavior)."),
        ("Abstraction", "Showing only essential features; hiding complexity."),
        ("Constructor", "Special method, same name as class, no return type, auto-called on object creation."),
        ("Type Casting", "Assigning a value of one data type to another."),
        ("Implicit Cast", "Smaller → larger type (automatic, safe)."),
        ("Explicit Cast", "Larger → smaller type (manual, may lose data)."),
        ("Sequential", "Execute statements one after another."),
        ("Selection", "Choose path based on condition (if / if-else / elif)."),
        ("Iteration", "Repeat statements (for / while)."),
    ]
    
    for term, definition in defs:
        story.append(Paragraph(f"<b>{term}:</b> {definition}", styles['BulletText']))
    
    story.append(Spacer(1, 12))
    story.append(Paragraph("Common Code Patterns to Recognize", styles['SubHeader']))
    story.append(code_block(
        "// Variable & Constant\nint age = 25;  const int Max = 100;\n\n"
        "// Method\npublic int Add(int a, int b) { return a + b; }\n\n"
        "// Constructor\npublic Student(string name) { this.name = name; }\n\n"
        "// Casting\nint x = (int)3.14;   string s = Convert.ToString(x);\n\n"
        "// Control\nif (x > 0) { ... } else { ... }\nfor (int i=0; i<n; i++) { ... }\nwhile (cond) { ... }",
        styles
    ))
    
    story.append(Spacer(1, 20))
    story.append(HRFlowable(width="100%", thickness=2, color=PRIMARY, spaceBefore=10, spaceAfter=10))
    story.append(Paragraph(
        "<b>Final Advice:</b> Read every definition out loud. Write the 4 pillars from memory. "
        "Trace every code example by hand. Understand why each concept exists, not just what it is. "
        "You have everything from the slides — now make it yours. Good luck on your exam!",
        styles['BodyText2']
    ))
    story.append(Spacer(1, 15))
    story.append(Paragraph("HAPPY CODING & GOOD LUCK!", styles['CoverTitle']))
    
    # Build
    doc.build(story, onFirstPage=add_header_footer, onLaterPages=add_header_footer)
    print("PDF created successfully: /home/workdir/artifacts/CSharp_OOP_Exam_Reviewer.pdf")

if __name__ == "__main__":
    build_pdf()
